namespace ipso_knowledge_base.Models
{
    public class FileEntry
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public byte[]? File { get; set; }
    }
}
