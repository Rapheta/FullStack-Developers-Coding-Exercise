using AutoMapper;
using Intricom.Core.DTOs;
using Intricom.Core.Entities;

namespace Intricom.Infrastructure.Mappings
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<HotelBooking, HotelBookingDto>();
            CreateMap<HotelBookingDto, HotelBooking>();

            CreateMap<Hotel, HotelDto>();
            CreateMap<HotelDto, Hotel>();

            CreateMap<Client, ClientDto>();
            CreateMap<ClientDto, Client>();
        }
    }
}
