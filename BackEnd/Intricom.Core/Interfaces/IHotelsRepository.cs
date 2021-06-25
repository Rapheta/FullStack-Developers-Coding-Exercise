using Intricom.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IHotelsRepository
    {
        Task<IEnumerable<Hotel>> GetHotels();
        Task<Hotel> GetHotel(int id);
        Task<bool> EditHotel(Hotel hotel);
    }
}
