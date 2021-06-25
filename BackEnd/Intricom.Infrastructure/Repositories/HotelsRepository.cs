using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intricom.Infrastructure.Repositories
{
    public class HotelsRepository : IHotelsRepository
    {
        private readonly IntricomContext _context;

        public HotelsRepository(IntricomContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Hotel>> GetHotels()
        {
            var hotels = await _context.Hotel.ToListAsync();
            Log.Information("All the existing hotels have been retrieved successfully");
            return hotels;
        }

        public async Task<Hotel> GetHotel(int id)
        {
            var hb = await _context.Hotel.FirstOrDefaultAsync(n => n.Id == id);

            if (hb != null)
            {
                Log.Information("The hotel with id: '{id}' has been retrieved successfully", id);
                return hb;
            }
            else
            {
                Log.Error("The hotel with id: '{id}' has not been found in the database", id);
                return new Hotel();
            }
        }

        public async Task<bool> EditHotel(Hotel hotel)
        {
            var editedH = _context.Hotel.FirstOrDefault(n => n.Id == hotel.Id);

            if (editedH != null)
            {
                editedH.Name = hotel.Name;
                editedH.Address = hotel.Address;

                _context.SaveChanges();

                Log.Information("The hotel has been updated successfully");
                return true;
            }
            else
            {
                Log.Error("You attempted to update a non existing hotel");
                return false;
            }
        }
    }
}
