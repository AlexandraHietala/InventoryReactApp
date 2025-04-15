namespace InventoryReactApp.Server
{
    public class Brand: Base
    {
        public required int Id { get; set; }
        public required string BrandName { get; set; }
        public string? Description { get; set; }
    }
}
