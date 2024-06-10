using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Sandwich.Models;
public class SandwichObj
{
    public int Id { get; set; }
    public double Price
    {
        get
        {
            return Ingredients?.Sum(i => i.Price) ?? 0;
        }
    }
    public int TotalCalories
    {
         get
        {
            return Ingredients?.Sum(i => i.Calories) ?? 0;
        }
    }
    [Required]
    public int CustomerId { get; set; }
    public List<SandwichIngredient> SandwichIngredients { get; set; }

    [NotMapped]
    public List<Ingredient> Ingredients
    {
        get
        {
            return SandwichIngredients?.Select(si => si.Ingredient).ToList();
        }
    }
}