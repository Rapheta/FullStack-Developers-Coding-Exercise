using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intricom.Infrastructure.Repositories
{
    public class ClientsRepository : IClientsRepository
    {
        private readonly IntricomContext _context;

        public ClientsRepository(IntricomContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Client>> GetClients()
        {
            var clients = await _context.Client.ToListAsync();
            Log.Information("All the existing clients have been retrieved successfully");
            return clients;
        }

        public async Task<Client> GetClient(int id)
        {
            var client = await _context.Client.FirstOrDefaultAsync(n => n.Id == id);

            if (client != null)
            {
                Log.Information("The client with id: '{id}' has been retrieved successfully", id);
                return client;
            }
            else
            {
                Log.Error("The client with id: '{id}' has not been found in the database", id);
                return new Client();
            }
        }

        public async Task<bool> EditClient(Client client)
        {
            var editedC = _context.Client.FirstOrDefault(n => n.Id == client.Id);

            if (editedC != null)
            {
                editedC.Name = client.Name;
                editedC.Address = client.Address;
                editedC.Phone = client.Phone;

                _context.SaveChanges();

                Log.Information("The client has been updated successfully");
                return true;
            }
            else
            {
                Log.Error("You attempted to update a non existing client");
                return false;
            }
        }
    }
}
