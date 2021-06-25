using System;
using System.Threading.Tasks;

namespace Intricom.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IHotelBookingsRepository HotelBookingsRepository { get; }
        IHotelsRepository HotelsRepository { get; }
        IClientsRepository ClientsRepository { get; }
        void SaveChanges();
        Task SaveChangesAsync();
    }
}
