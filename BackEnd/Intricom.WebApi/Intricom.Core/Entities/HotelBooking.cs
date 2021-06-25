using System;
using System.Collections.Generic;

namespace Intricom.Core.Entities
{
    public class HotelBooking
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ClientId { get; set; }
    }
}
