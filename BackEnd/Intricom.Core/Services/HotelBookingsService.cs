using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Services
{
    public class HotelBookingsService : IHotelBookingsService
    {
        private readonly IUnitOfWork _unitOfWork;
        public HotelBookingsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<HotelBooking>> GetHotelBookings()
        {
            return await _unitOfWork.HotelBookingsRepository.GetHotelBookings();
        }

        public async Task<HotelBooking> GetHotelBooking(int id)
        {
            return await _unitOfWork.HotelBookingsRepository.GetHotelBooking(id);
        }

        public async Task<HotelBooking> CreateHotelBooking(HotelBooking hotelBooking)
        {
            return await _unitOfWork.HotelBookingsRepository.CreateHotelBooking(hotelBooking);
        }

        public async Task<bool> DeleteHotelBooking(int id)
        {
            return await _unitOfWork.HotelBookingsRepository.DeleteHotelBooking(id);
        }

        public async Task<bool> EditHotelBooking(HotelBooking hotelBooking)
        {
            return await _unitOfWork.HotelBookingsRepository.EditHotelBooking(hotelBooking);
        }
    }
}
