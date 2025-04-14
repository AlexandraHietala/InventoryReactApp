namespace InventoryApp.Server
{
    public class ItemComment: Base
    {
        public required int Id { get; set; }
        public required int ItemId { get; set; }
        public required string Comment { get; set; }
    }
}
