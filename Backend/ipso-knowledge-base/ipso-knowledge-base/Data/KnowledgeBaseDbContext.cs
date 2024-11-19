using ipso_knowledge_base.Models;
using Microsoft.EntityFrameworkCore;

namespace ipso_knowledge_base.Data
{
    //In dieser Klasse wird mit der Datenbank kommuniziert
    public class KnowledgeBaseDbContext: DbContext
    {
        public KnowledgeBaseDbContext(DbContextOptions options): base(options)
        { 

        }

        //Tabellen in der Datenbank
        public DbSet<LinkEntry> LinkEntries { get; set; }
        public DbSet<FileEntry> FileEntries { get; set; }

    }
}
