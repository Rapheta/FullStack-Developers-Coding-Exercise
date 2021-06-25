using Intricom.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IClientsRepository
    {
        Task<IEnumerable<Client>> GetClients();
    }
}
