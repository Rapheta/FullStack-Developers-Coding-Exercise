using Intricom.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IHotelsService
    {
        Task<IEnumerable<Hotel>> GetHotels();
    }
}
