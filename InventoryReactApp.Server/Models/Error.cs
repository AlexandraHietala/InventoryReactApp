using System.ComponentModel.DataAnnotations;

namespace InventoryReactApp.Server
{
    public class Error
    {
        public required int Code { get; set; }
        public required string Message { get; set; }
    }
}
