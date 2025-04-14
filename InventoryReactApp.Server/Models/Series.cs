namespace InventoryApp.Server
{
    public class Series: Base
    {
        public required int Id { get; set; }
        public required string SeriesName { get; set; }
        public string? Description { get; set; }
    }
}
