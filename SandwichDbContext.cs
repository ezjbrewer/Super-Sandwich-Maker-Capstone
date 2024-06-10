using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Sandwich.Models;
using Microsoft.AspNetCore.Identity;

namespace Sandwich.Data;
public class SandwichDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;

    public DbSet<UserProfile> UserProfiles { get; set; }


    public SandwichDbContext(DbContextOptions<SandwichDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser[]
        {
            new IdentityUser
            {
                Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                UserName = "Administrator",
                Email = "admina@strator.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
                UserName = "JohnDoe",
                Email = "john@doe.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "a7d21fac-3b21-454a-a747-075f072d0cf3",
                UserName = "JaneSmith",
                Email = "jane@smith.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
                UserName = "AliceJohnson",
                Email = "alice@johnson.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
                UserName = "BobWilliams",
                Email = "bob@williams.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
                Id = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
                UserName = "EveDavis",
                Email = "Eve@Davis.comx",
                PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },

        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>[]
        {
            new IdentityUserRole<string>
            {
                RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
            },
            new IdentityUserRole<string>
            {
                RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                UserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df"
            },

        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile[]
        {
            new UserProfile
            {
                Id = 1,
                IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                FirstName = "Admina",
                LastName = "Strator",
                CreateDateTime = new DateTime(2022, 1, 25)
            },
             new UserProfile
            {
                Id = 2,
                FirstName = "John",
                LastName = "Doe",
                CreateDateTime = new DateTime(2023, 2, 2),
                IdentityUserId = "d8d76512-74f1-43bb-b1fd-87d3a8aa36df",
            },
            new UserProfile
            {
                Id = 3,
                FirstName = "Jane",
                LastName = "Smith",
                CreateDateTime = new DateTime(2022, 3, 15),
                IdentityUserId = "a7d21fac-3b21-454a-a747-075f072d0cf3",
            },
            new UserProfile
            {
                Id = 4,
                FirstName = "Alice",
                LastName = "Johnson",
                CreateDateTime = new DateTime(2023, 6, 10),
                IdentityUserId = "c806cfae-bda9-47c5-8473-dd52fd056a9b",
            },
            new UserProfile
            {
                Id = 5,
                FirstName = "Bob",
                LastName = "Williams",
                CreateDateTime = new DateTime(2023, 5, 15),
                IdentityUserId = "9ce89d88-75da-4a80-9b0d-3fe58582b8e2",
            },
            new UserProfile
            {
                Id = 6,
                FirstName = "Eve",
                LastName = "Davis",
                CreateDateTime = new DateTime(2022, 10, 18),
                IdentityUserId = "d224a03d-bf0c-4a05-b728-e3521e45d74d",
            }
        });
        modelBuilder.Entity<Ingredient>().HasData(new Ingredient[]
        {
            new Ingredient { Id = 1, Name = "Whole Grain White", Price = 0.99, Calories = 158, TypeId = 1 },
            new Ingredient { Id = 2, Name = "Lettuce", Price = 0.50, Calories = 5, TypeId = 2 },
            new Ingredient { Id = 3, Name = "Tomato", Price = 0.70, Calories = 22, TypeId = 2 },
            new Ingredient { Id = 4, Name = "Cheddar Cheese", Price = 1.20, Calories = 113, TypeId = 3 },
            new Ingredient { Id = 5, Name = "Ham", Price = 1.50, Calories = 61, TypeId = 4 },
            new Ingredient { Id = 6, Name = "Turkey", Price = 1.60, Calories = 50, TypeId = 4 },
            new Ingredient { Id = 7, Name = "Bacon", Price = 1.70, Calories = 42, TypeId = 4 },
            new Ingredient { Id = 8, Name = "Avocado", Price = 1.80, Calories = 160, TypeId = 2 },
            new Ingredient { Id = 9, Name = "Pickles", Price = 0.40, Calories = 4, TypeId = 2 },
            new Ingredient { Id = 10, Name = "Mustard", Price = 0.30, Calories = 3, TypeId = 5 }
        });
        modelBuilder.Entity<SandwichObj>().HasData(new SandwichObj[]
        {
            new SandwichObj { Id = 1, CustomerId = 1 },
            new SandwichObj { Id = 2, CustomerId = 1 },
            new SandwichObj { Id = 3, CustomerId = 1 },
            new SandwichObj { Id = 4, CustomerId = 1 },
            new SandwichObj { Id = 5, CustomerId = 1 },
            new SandwichObj { Id = 6, CustomerId = 2 },
            new SandwichObj { Id = 7, CustomerId = 2 },
            new SandwichObj { Id = 8, CustomerId = 2 },
            new SandwichObj { Id = 9, CustomerId = 2 },
            new SandwichObj { Id = 10, CustomerId = 2 },
            new SandwichObj { Id = 11, CustomerId = 3 },
            new SandwichObj { Id = 12, CustomerId = 3 },
            new SandwichObj { Id = 13, CustomerId = 3 },
            new SandwichObj { Id = 14, CustomerId = 3 },
            new SandwichObj { Id = 15, CustomerId = 3 },
            new SandwichObj { Id = 16, CustomerId = 4 },
            new SandwichObj { Id = 17, CustomerId = 4 },
            new SandwichObj { Id = 18, CustomerId = 4 },
            new SandwichObj { Id = 19, CustomerId = 4 },
            new SandwichObj { Id = 20, CustomerId = 4 }
        });
        modelBuilder.Entity<SandwichIngredient>().HasData(new SandwichIngredient[]
        {
            new SandwichIngredient { Id = 1, SandwichId = 1, IngredientId = 1 },
            new SandwichIngredient { Id = 2, SandwichId = 1, IngredientId = 2 },
            new SandwichIngredient { Id = 3, SandwichId = 1, IngredientId = 3 },
            new SandwichIngredient { Id = 4, SandwichId = 1, IngredientId = 4 },

            new SandwichIngredient { Id = 5, SandwichId = 2, IngredientId = 2 },
            new SandwichIngredient { Id = 6, SandwichId = 2, IngredientId = 3 },
            new SandwichIngredient { Id = 7, SandwichId = 2, IngredientId = 4 },
            new SandwichIngredient { Id = 8, SandwichId = 2, IngredientId = 5 },

            new SandwichIngredient { Id = 9, SandwichId = 3, IngredientId = 3 },
            new SandwichIngredient { Id = 10, SandwichId = 3, IngredientId = 4 },
            new SandwichIngredient { Id = 11, SandwichId = 3, IngredientId = 5 },
            new SandwichIngredient { Id = 12, SandwichId = 3, IngredientId = 6 },

            new SandwichIngredient { Id = 13, SandwichId = 4, IngredientId = 4 },
            new SandwichIngredient { Id = 14, SandwichId = 4, IngredientId = 5 },
            new SandwichIngredient { Id = 15, SandwichId = 4, IngredientId = 6 },
            new SandwichIngredient { Id = 16, SandwichId = 4, IngredientId = 7 },

            new SandwichIngredient { Id = 17, SandwichId = 5, IngredientId = 5 },
            new SandwichIngredient { Id = 18, SandwichId = 5, IngredientId = 6 },
            new SandwichIngredient { Id = 19, SandwichId = 5, IngredientId = 7 },
            new SandwichIngredient { Id = 20, SandwichId = 5, IngredientId = 8 },

            new SandwichIngredient { Id = 21, SandwichId = 6, IngredientId = 1 },
            new SandwichIngredient { Id = 22, SandwichId = 6, IngredientId = 2 },
            new SandwichIngredient { Id = 23, SandwichId = 6, IngredientId = 3 },
            new SandwichIngredient { Id = 24, SandwichId = 6, IngredientId = 4 },

            new SandwichIngredient { Id = 25, SandwichId = 7, IngredientId = 2 },
            new SandwichIngredient { Id = 26, SandwichId = 7, IngredientId = 3 },
            new SandwichIngredient { Id = 27, SandwichId = 7, IngredientId = 4 },
            new SandwichIngredient { Id = 28, SandwichId = 7, IngredientId = 5 },

            new SandwichIngredient { Id = 29, SandwichId = 8, IngredientId = 3 },
            new SandwichIngredient { Id = 30, SandwichId = 8, IngredientId = 4 },
            new SandwichIngredient { Id = 31, SandwichId = 8, IngredientId = 5 },
            new SandwichIngredient { Id = 32, SandwichId = 8, IngredientId = 6 },

            new SandwichIngredient { Id = 33, SandwichId = 9, IngredientId = 4 },
            new SandwichIngredient { Id = 34, SandwichId = 9, IngredientId = 5 },
            new SandwichIngredient { Id = 35, SandwichId = 9, IngredientId = 6 },
            new SandwichIngredient { Id = 36, SandwichId = 9, IngredientId = 7 },

            new SandwichIngredient { Id = 37, SandwichId = 10, IngredientId = 5 },
            new SandwichIngredient { Id = 38, SandwichId = 10, IngredientId = 6 },
            new SandwichIngredient { Id = 39, SandwichId = 10, IngredientId = 7 },
            new SandwichIngredient { Id = 40, SandwichId = 10, IngredientId = 8 },

            new SandwichIngredient { Id = 41, SandwichId = 11, IngredientId = 1 },
            new SandwichIngredient { Id = 42, SandwichId = 11, IngredientId = 2 },
            new SandwichIngredient { Id = 43, SandwichId = 11, IngredientId = 3 },
            new SandwichIngredient { Id = 44, SandwichId = 11, IngredientId = 4 },

            new SandwichIngredient { Id = 45, SandwichId = 12, IngredientId = 2 },
            new SandwichIngredient { Id = 46, SandwichId = 12, IngredientId = 3 },
            new SandwichIngredient { Id = 47, SandwichId = 12, IngredientId = 4 },
            new SandwichIngredient { Id = 48, SandwichId = 12, IngredientId = 5 },

            new SandwichIngredient { Id = 49, SandwichId = 13, IngredientId = 3 },
            new SandwichIngredient { Id = 50, SandwichId = 13, IngredientId = 4 },
            new SandwichIngredient { Id = 51, SandwichId = 13, IngredientId = 5 },
            new SandwichIngredient { Id = 52, SandwichId = 13, IngredientId = 6 },

            new SandwichIngredient { Id = 53, SandwichId = 14, IngredientId = 4 },
            new SandwichIngredient { Id = 54, SandwichId = 14, IngredientId = 5 },
            new SandwichIngredient { Id = 55, SandwichId = 14, IngredientId = 6 },
            new SandwichIngredient { Id = 56, SandwichId = 14, IngredientId = 7 },

            new SandwichIngredient { Id = 57, SandwichId = 15, IngredientId = 5 },
            new SandwichIngredient { Id = 58, SandwichId = 15, IngredientId = 6 },
            new SandwichIngredient { Id = 59, SandwichId = 15, IngredientId = 7 },
            new SandwichIngredient { Id = 60, SandwichId = 15, IngredientId = 8 },

            new SandwichIngredient { Id = 61, SandwichId = 16, IngredientId = 1 },
            new SandwichIngredient { Id = 62, SandwichId = 16, IngredientId = 2 },
            new SandwichIngredient { Id = 63, SandwichId = 16, IngredientId = 3 },
            new SandwichIngredient { Id = 64, SandwichId = 16, IngredientId = 4 },

            new SandwichIngredient { Id = 65, SandwichId = 17, IngredientId = 2 },
            new SandwichIngredient { Id = 66, SandwichId = 17, IngredientId = 3 },
            new SandwichIngredient { Id = 67, SandwichId = 17, IngredientId = 4 },
            new SandwichIngredient { Id = 68, SandwichId = 17, IngredientId = 5 },

            new SandwichIngredient { Id = 69, SandwichId = 18, IngredientId = 3 },
            new SandwichIngredient { Id = 70, SandwichId = 18, IngredientId = 4 },
            new SandwichIngredient { Id = 71, SandwichId = 18, IngredientId = 5 },
            new SandwichIngredient { Id = 72, SandwichId = 18, IngredientId = 6 },

            new SandwichIngredient { Id = 73, SandwichId = 19, IngredientId = 4 },
            new SandwichIngredient { Id = 74, SandwichId = 19, IngredientId = 5 },
            new SandwichIngredient { Id = 75, SandwichId = 19, IngredientId = 6 },
            new SandwichIngredient { Id = 76, SandwichId = 19, IngredientId = 7 },

            new SandwichIngredient { Id = 77, SandwichId = 20, IngredientId = 5 },
            new SandwichIngredient { Id = 78, SandwichId = 20, IngredientId = 6 },
            new SandwichIngredient { Id = 79, SandwichId = 20, IngredientId = 7 },
            new SandwichIngredient { Id = 80, SandwichId = 20, IngredientId = 8 }
        });

    modelBuilder.Entity<SandwichIngredient>()
        .HasKey(si => new { si.SandwichId, si.IngredientId });

    modelBuilder.Entity<SandwichIngredient>()
        .HasOne(si => si.Sandwich)
        .WithMany(s => s.SandwichIngredients)
        .HasForeignKey(si => si.SandwichId);

    modelBuilder.Entity<SandwichIngredient>()
        .HasOne(si => si.Ingredient)
        .WithMany(i => i.SandwichIngredients)
        .HasForeignKey(si => si.IngredientId);
    }
}