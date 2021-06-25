using System;

namespace Intricom.Core.DTOs
{
    public class HotelBookingDto
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ClientId { get; set; }


        public string HotelName { get; set; }
        public string HotelAddress { get; set; }

        public string ClientName { get; set; }
        public string ClientAddress { get; set; }
        public string ClientPhone { get; set; }
    }
}
