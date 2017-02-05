using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using webapi.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class StrategyController : Controller
    {
        public IStrategyRepository Items { get; set; }

        public StrategyController(IStrategyRepository items)
        {
            Items = items;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Strategy> GetAll()
        {
            return Items.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetStrategy")]
        public IActionResult GetById(string id)
        {
            var item = Items.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPost]
        public IActionResult Create([FromBody] Strategy item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            Items.Add(item);
            return CreatedAtRoute("GetStrategy", new { id = item.Key }, item);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var item = Items.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            Items.Remove(id);
            return new NoContentResult();
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Strategy item)
        {
            if (item == null || item.Key != id)
            {
                return BadRequest();
            }

            var todo = Items.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            Items.Update(item);
            return new NoContentResult();
        }

    }
}
