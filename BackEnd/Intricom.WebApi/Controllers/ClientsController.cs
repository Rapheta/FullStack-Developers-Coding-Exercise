using AutoMapper;
using Intricom.Core.DTOs;
using Intricom.Core.Entities;
using Intricom.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intricom.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly IClientsService _clientsService;
        private readonly IMapper _mapper;

        public ClientsController(IClientsService clientsService, IMapper mapper)
        {
            _clientsService = clientsService;
            _mapper = mapper;
        }

        /// <summary>
        ///     Retrieve all clients
        /// </summary>
        /// <returns>List of all clients</returns>
        [HttpGet]
        public async Task<IActionResult> GetClients()
        {
            var clients = await _clientsService.GetClients();
            var clientsDto = _mapper.Map<IEnumerable<ClientDto>>(clients);

            return Ok(clientsDto);
        }

        /// <summary>
        ///     Retrieve a client by its identifier
        /// </summary>
        /// <returns>One specific client</returns>
        [HttpGet("{id}", Name = "GetClient")]
        public async Task<IActionResult> GetClient(int id)
        {
            var client = await _clientsService.GetClient(id);
            var clientDto = _mapper.Map<ClientDto>(client);
            return Ok(clientDto);
        }

        /// <summary>
        ///     Edit a client
        /// </summary>
        /// <returns>true / false</returns>
        [HttpPut]
        public async Task<IActionResult> EditClient([FromBody] Client client)
        {
            var response = await _clientsService.EditClient(client);
            return Ok(response);
        }
    }
}
