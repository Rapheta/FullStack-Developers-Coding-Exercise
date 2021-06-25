using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Collections.Generic;
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
    }
}
