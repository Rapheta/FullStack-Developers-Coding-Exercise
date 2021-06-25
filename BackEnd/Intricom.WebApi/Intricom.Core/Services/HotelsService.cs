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
    }
}
