using System.ComponentModel.DataAnnotations;

namespace InventoryApp.Server
{
    public class Item: Base
    {
        public required int Id { get; set; }
        public required int CollectionId { get; set; }
        public required string Status { get; set; }
        public required string Type { get; set; }
        public int? BrandId { get; set; }
        public int? SeriesId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public required string Format { get; set; }
        public required string Size { get; set; }
        public int? Year { get; set; }
        public string? Photo { get; set; }
    }
}
