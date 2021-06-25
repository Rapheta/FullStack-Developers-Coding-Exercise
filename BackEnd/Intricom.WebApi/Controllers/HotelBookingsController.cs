using AutoMapper;
using Intricom.Core.DTOs;
using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intricom.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HotelBookingsController : ControllerBase
    {
        private readonly IHotelBookingsService _hotelBookingsService;
        private readonly IClientsService _clientsService;
        private readonly IHotelsService _hotelsService;
        private readonly IMapper _mapper;

        public HotelBookingsController(IHotelBookingsService hotelBookingsService, IClientsService clientsService, IHotelsService hotelsService, IMapper mapper)
        {
            _hotelBookingsService = hotelBookingsService;
            _clientsService = clientsService;
            _hotelsService = hotelsService;
            _mapper = mapper;
        }

        /// <summary>
        ///     Retrieve all hotel bookings
        /// </summary>
        /// <returns>List of all hotel bookings</returns>
        [HttpGet]
        public async Task<IActionResult> GetHotelBookings()
        {
            var hotelBookings = await _hotelBookingsService.GetHotelBookings();
            var hotelBookingsDto = _mapper.Map<IEnumerable<HotelBookingDto>>(hotelBookings);

            var clients = await _clientsService.GetClients();
            var hotels = await _hotelsService.GetHotels();

            foreach (var hotelBookingDto in hotelBookingsDto)
            {
                hotelBookingDto.ClientName = clients.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Name;
                hotelBookingDto.ClientAddress = clients.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Address;
                hotelBookingDto.ClientPhone = clients.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Phone;

                hotelBookingDto.HotelName = hotels.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Name;
                hotelBookingDto.HotelAddress = hotels.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Address;
            }

            return Ok(hotelBookingsDto);
        }

        /// <summary>
        ///     Retrieve a hotel booking by its identifier
        /// </summary>
        /// <returns>One specific hotel booking</returns>
        [HttpGet("{id}", Name = "GetHotelBooking")]
        public async Task<IActionResult> GetHotelBooking(int id)
        {
            var hotelBooking = await _hotelBookingsService.GetHotelBooking(id);
            var hotelBookingDto = _mapper.Map<HotelBookingDto>(hotelBooking);
            return Ok(hotelBookingDto);
        }

        /// <summary>
        ///     Create a hotel booking
        /// </summary>
        /// <returns>Created hotel booking</returns>
        [HttpPost]
        public async Task<IActionResult> CreateHotelBooking(HotelBooking hotelBooking)
        {
            var newHotelBooking = await _hotelBookingsService.CreateHotelBooking(hotelBooking);
            var hotelBookingDto = _mapper.Map<HotelBookingDto>(newHotelBooking);

            var clients = await _clientsService.GetClients();
            var hotels = await _hotelsService.GetHotels();

            hotelBookingDto.ClientName = clients.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Name;
            hotelBookingDto.HotelName = hotels.FirstOrDefault(x => x.Id == hotelBookingDto.HotelId).Name;

            return CreatedAtRoute("GetHotelBooking", new { newHotelBooking.Id }, hotelBookingDto);
        }

        /// <summary>
        ///     Delete a hotel booking by its identifier
        /// </summary>
        /// <returns>true / false</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotelBooking(int id)
        {
            var response = await _hotelBookingsService.DeleteHotelBooking(id);
            return Ok(response);
        }

        /// <summary>
        ///     Edit a hotel booking
        /// </summary>
        /// <returns>true / false</returns>
        [HttpPut]
        public async Task<IActionResult> EditHotelBooking([FromBody] HotelBooking hotelBooking)
        {
            var response = await _hotelBookingsService.EditHotelBooking(hotelBooking);
            return Ok(response);
        }
    }
}
