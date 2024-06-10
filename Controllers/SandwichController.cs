using Microsoft.AspNetCore.Mvc;
using Sandwich.Models;
using Sandwich.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Sandwich.Controllers;

[ApiController]
[Route("api/[controller")]
public class SandwichController : ControllerBase
{
    private SandwichDbContext _dbContext;
    public SandwichController(SandwichDbContext context)
    {
        _dbContext = context;
    }
}