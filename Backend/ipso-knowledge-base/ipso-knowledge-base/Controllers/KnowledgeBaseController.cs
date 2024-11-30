using ipso_knowledge_base.Data;
using ipso_knowledge_base.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ipso_knowledge_base.Controllers
{
    //api/KnowledgeBaseController
    [Route("api/[controller]")]
    [ApiController]
    public class KnowledgeBaseController : ControllerBase
    {
        private readonly KnowledgeBaseDbContext dbContext;

        //Constructor injection des dbContext
        public KnowledgeBaseController(KnowledgeBaseDbContext dbContext)
        {
            this.dbContext = dbContext;   
        }

        #region LinkEntry
        [HttpGet]
        public IActionResult GetAllLinkEntries()
        {
            var linkEntries = dbContext.LinkEntries.ToList();
            return Ok(linkEntries);
        }

        [HttpPost]
        public IActionResult AddLinkEntry(LinkEntryDTO dto)
        {
            if (dto == null) return BadRequest("Invalid data.");

            //DTO zu Model umwandeln
            var linkEntryModel = new LinkEntry
            {
                Id = Guid.NewGuid(),
                Title = dto.Title,
                Description = dto.Description,
                Link = dto.Link,
            };

            //Auf DB Speichern
            dbContext.LinkEntries.Add(linkEntryModel);
            dbContext.SaveChanges();

            return Ok(linkEntryModel);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLinkEntry(Guid id)
        {
            // Überprüfen, ob der Eintrag in der Datenbank existiert
            var entryToDelete = dbContext.LinkEntries.FirstOrDefault(le => le.Id == id);
            if (entryToDelete == null)
            {
                return NotFound($"LinkEntry mit der ID {id} wurde nicht gefunden.");
            }

            // Eintrag löschen
            dbContext.LinkEntries.Remove(entryToDelete);
            dbContext.SaveChanges();

            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateLinkEntry(Guid id, LinkEntryDTO dto)
        {
            // Überprüfen, ob der Eintrag in der Datenbank existiert
            var existingEntry = dbContext.LinkEntries.FirstOrDefault(le => le.Id == id);
            if (existingEntry == null)
            {
                return NotFound($"LinkEntry mit der ID {id} wurde nicht gefunden.");
            }

            // Felder aktualisieren
            existingEntry.Title = dto.Title;
            existingEntry.Description = dto.Description;
            existingEntry.Link = dto.Link;

            // Änderungen speichern
            dbContext.SaveChanges();

            return Ok(existingEntry);
        }
        #endregion LinkEntry



    }
}
