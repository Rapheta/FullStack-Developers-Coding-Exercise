using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Core.Services
{
    public class HotelsService : IHotelsService
    {
        private readonly IUnitOfWork _unitOfWork;
        public HotelsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Hotel>> GetHotels()
        {
            return await _unitOfWork.HotelsRepository.GetHotels();
        }

        public async Task<Hotel> GetHotel(int id)
        {
            return await _unitOfWork.HotelsRepository.GetHotel(id);
        }

        public async Task<bool> EditHotel(Hotel hotel)
        {
            return await _unitOfWork.HotelsRepository.EditHotel(hotel);
        }
    }
}
