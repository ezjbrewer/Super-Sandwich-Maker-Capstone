using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Sandwich.Models;
public class SandwichIngredient
{
    public int Id { get; set; }
    [Required]
    public int SandwichId { get; set; }
    public SandwichObj Sandwich { get; set; }
    [Required]
    public int IngredientId { get; set; }
    public Ingredient Ingredient { get; set; }
}