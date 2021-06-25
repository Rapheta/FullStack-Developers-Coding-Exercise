using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intricom.Infrastructure.Repositories
{
    public class HotelBookingsRepository : IHotelBookingsRepository
    {
        private readonly IntricomContext _context;

        public HotelBookingsRepository(IntricomContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HotelBooking>> GetHotelBookings()
        {
            var hbs = await _context.HotelBooking.ToListAsync();
            Log.Information("All the existing hotel bookings have been retrieved successfully");
            return hbs;
        }

        public async Task<HotelBooking> GetHotelBooking(int id)
        {
            var hb = await _context.HotelBooking.FirstOrDefaultAsync(n => n.Id == id);

            if(hb != null)
            {
                Log.Information("The hotel booking with id: '{id}' has been retrieved successfully", id);
                return hb;
            }
            else
            {
                Log.Error("The hotel booking with id: '{id}' has not been found in the database", id);
                return new HotelBooking();
            }
            
        }


        public async Task<HotelBooking> CreateHotelBooking(HotelBooking hb)
        {
            hb.CreatedDate = DateTime.Now;

            _context.Add(hb);
            _context.SaveChanges();

            Log.Information("A new hotel booking has been created successfully", hb.Id);

            return hb;
        }

        public async Task<bool> DeleteHotelBooking(int id)
        {
            var hb = _context.HotelBooking.FirstOrDefault(n => n.Id == id);

            if (hb != null)
            {
                _context.Remove(hb);
                _context.SaveChanges();

                Log.Information("The hotel booking with id: '{id}' has been deleted successfully", id);
                return true;
            }
            else
            {
                Log.Error("You attempted to delete a non existing hotel booking");
                return false;
            }
        }

        public async Task<bool> EditHotelBooking(HotelBooking hb)
        {
            var editedHb = _context.HotelBooking.FirstOrDefault(n => n.Id == hb.Id);

            if (editedHb != null)
            {
                editedHb.HotelId = hb.HotelId;
                editedHb.Description = hb.Description;
                editedHb.Address = hb.Address;
                editedHb.CreatedDate = hb.CreatedDate;
                editedHb.ClientId = hb.ClientId;

                _context.SaveChanges();

                Log.Information("The hotel booking has been updated successfully");
                return true;
            }
            else
            {
                Log.Error("You attempted to update a non existing hotel booking");
                return false;
            }
        }
    }
}
