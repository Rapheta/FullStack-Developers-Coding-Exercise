using Intricom.Core.Interfaces;
using Intricom.Infrastructure.Data;
using System.Threading.Tasks;

namespace Intricom.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IntricomContext _context;
        private readonly IHotelBookingsRepository _hotelBookingsRepository;
        private readonly IHotelsRepository _hotelsRepository;
        private readonly IClientsRepository _clientsRepository;

        public UnitOfWork(IntricomContext context)
        {
            _context = context;
        }

        public IHotelBookingsRepository HotelBookingsRepository => _hotelBookingsRepository ?? new HotelBookingsRepository(_context);
        public IHotelsRepository HotelsRepository => _hotelsRepository ?? new HotelsRepository(_context);
        public IClientsRepository ClientsRepository => _clientsRepository ?? new ClientsRepository(_context);

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
