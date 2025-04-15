namespace InventoryReactApp.Server
{
    public class User: Base
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required string PassSalt { get; set; }
        public required string PassHash { get; set; }
        public int? RoleId { get; set; }
    }
}
