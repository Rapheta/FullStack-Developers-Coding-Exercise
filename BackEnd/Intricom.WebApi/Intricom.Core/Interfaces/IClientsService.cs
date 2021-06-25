using Intricom.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IClientsService
    {
        Task<IEnumerable<Client>> GetClients();
    }
}
