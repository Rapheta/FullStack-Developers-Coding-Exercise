using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Collections.Generic;
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
    }
}
