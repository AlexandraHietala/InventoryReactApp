namespace InventoryReactApp.Server
{
    public class Collection
    {
        public required int Id { get; set; }
        public required string CollectionName { get; set; }
        public string? Description { get; set; }
    }
}
