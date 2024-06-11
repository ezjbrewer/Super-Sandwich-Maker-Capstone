using Microsoft.AspNetCore.Mvc;
using Sandwich.Models;
using Sandwich.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Sandwich.Models.DTOs;

namespace Sandwich.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SandwichController : ControllerBase
    {
        private readonly SandwichDbContext _dbContext;

        public SandwichController(SandwichDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet("users/{userId}")]
        public IActionResult GetSandwichesByUser(int userId)
        {
            UserProfile doesUserExists = _dbContext.UserProfiles.FirstOrDefault(u => u.Id == userId);

            if (doesUserExists == null)
            {
                return NotFound("User does not exist");
            }

            List<SandwichDTO> sandwiches = _dbContext.Sandwiches
                .Include(s => s.SandwichIngredients)
                .ThenInclude(si => si.Ingredient)
                .Where(s => s.CustomerId == userId)
                .Select(s => new SandwichDTO
                {
                    Id = s.Id,
                    CustomerId = s.CustomerId,
                    SandwichIngredients = s.SandwichIngredients.Select(si => new SandwichIngredientDTO
                    {
                        Id = si.Id,
                        SandwichId = si.SandwichId,
                        IngredientId = si.IngredientId,
                        Ingredient = new IngredientDTO
                        {
                            Id = si.Ingredient.Id,
                            Name = si.Ingredient.Name,
                            Price = si.Ingredient.Price,
                            Calories = si.Ingredient.Calories,
                            TypeId = si.Ingredient.TypeId
                        }
                    }).ToList()
                })
                .ToList();

            return Ok(sandwiches);
        }
        
        [HttpDelete("{sandwichId}")]
        public IActionResult deleteSandwich(int sandwichId)
        {
            SandwichObj sandwichToDelete = _dbContext.Sandwiches.FirstOrDefault(s => s.Id == sandwichId);

            if (sandwichToDelete == null)
            {
                return NotFound();
            }

            _dbContext.Sandwiches.Remove(sandwichToDelete);
            _dbContext.SaveChanges();

            return Accepted("Sandwich successfully deleted");
        }
    }
}