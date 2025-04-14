namespace InventoryApp.Server
{
    public class Auth
    {
        public required string PassSalt { get; set; }
        public required string PassHash { get; set; }
        public int? RoleId { get; set; }
    }
}
