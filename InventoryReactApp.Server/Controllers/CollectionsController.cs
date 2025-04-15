using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace InventoryReactApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CollectionsController : ControllerBase
    {
        private readonly ILogger<CollectionsController> _logger;
        private static readonly HttpClient client = new HttpClient();

        public CollectionsController(ILogger<CollectionsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetCollection")]
        public async Task<List<Collection>> Get()
        {
            return await GetCollections();
        }

        private async Task<List<Collection>> GetCollections()
        {
            List<Collection> collections = new List<Collection>();

            HttpResponseMessage response = await client.GetAsync("http://seinventoryfunction.azurewebsites.net/api/GetCollections/");
            if (response != null)
            {
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                if (responseBody != null && !string.IsNullOrEmpty(responseBody))
                {
                    collections = JsonConvert.DeserializeObject<List<Collection>>(responseBody);
                }
            }

            return collections;
        }
    }
}
