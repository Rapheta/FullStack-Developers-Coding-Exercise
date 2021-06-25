using Intricom.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IHotelBookingsRepository
    {
        Task<IEnumerable<HotelBooking>> GetHotelBookings();
        Task<HotelBooking> GetHotelBooking(int id);
        Task<HotelBooking> CreateHotelBooking(HotelBooking hotelBooking);
        Task<bool> DeleteHotelBooking(int id);
        Task<bool> EditHotelBooking(HotelBooking hotelBooking);
    }
}
