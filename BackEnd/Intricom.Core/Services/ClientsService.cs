using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Services
{
    public class ClientsService : IClientsService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ClientsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Client>> GetClients()
        {
            return await _unitOfWork.ClientsRepository.GetClients();
        }

        public async Task<Client> GetClient(int id)
        {
            return await _unitOfWork.ClientsRepository.GetClient(id);
        }

        public async Task<bool> EditClient(Client client)
        {
            return await _unitOfWork.ClientsRepository.EditClient(client);
        }
    }
}
