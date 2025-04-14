using System.ComponentModel.DataAnnotations;

namespace InventoryApp.Server
{
    public class GenericIdUser
    {
        public required int Id { get; set; }
        public required string LastModifiedBy { get; set; }
    }
}
