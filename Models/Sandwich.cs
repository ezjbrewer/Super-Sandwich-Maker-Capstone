using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Sandwich.Models
{
    public class SandwichObj
    {
        public int Id { get; set; }
        
        [Required]
        public int CustomerId { get; set; }
        public UserProfile Customer { get; set; }
        public List<SandwichIngredient> SandwichIngredients { get; set; }

        [NotMapped]
        public double Price
        {
            get
            {
                return Math.Round(SandwichIngredients?.Sum(si => si.Ingredient.Price) ?? 0, 2);
            }
        }

        [NotMapped]
        public int TotalCalories
        {
            get
            {
                return SandwichIngredients?.Sum(si => si.Ingredient.Calories) ?? 0;
            }
        }

        [NotMapped]
        public List<Ingredient> Ingredients
        {
            get
            {
                return SandwichIngredients?.Select(si => si.Ingredient).ToList();
            }
        }
    }
}
