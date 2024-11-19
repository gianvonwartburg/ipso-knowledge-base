namespace ipso_knowledge_base.Models
{
    public class LinkEntry
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
    }
}
