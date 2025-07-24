using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]  //https://localhost:5000/api/products
    [ApiController]
    public class ProductsController(StoreContext context) : ControllerBase
    {



        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {

            return await context.Products.ToListAsync();
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var productsGetId = await context.Products.FindAsync(id);

            if (productsGetId == null) return NotFound();

            return productsGetId;
        }
        
                            

    }
}

