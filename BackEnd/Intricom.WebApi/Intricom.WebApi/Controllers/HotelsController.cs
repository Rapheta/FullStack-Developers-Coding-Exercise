using AutoMapper;
using Intricom.Core.DTOs;
using Intricom.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HotelsController : ControllerBase
    {
        private readonly IHotelsService _hotelsService;
        private readonly IMapper _mapper;

        public HotelsController(IHotelsService hotelsService, IMapper mapper)
        {
            _hotelsService = hotelsService;
            _mapper = mapper;
        }

        /// <summary>
        ///     Retrieve all hotels
        /// </summary>
        /// <returns>List of all hotels</returns>
        [HttpGet]
        public async Task<IActionResult> GetHotels()
        {
            var hotels = await _hotelsService.GetHotels();
            var hotelsDto = _mapper.Map<IEnumerable<HotelDto>>(hotels);

            return Ok(hotelsDto);
        }
    }
}
