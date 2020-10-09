using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CetunaProject.API.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class FileController :ControllerBase
    {
        [HttpGet("{file}")]
        public async Task<IActionResult> GetFile(string file)
        {
            FileStream fileStream = await Task.Run(() => System.IO.File.OpenRead("wwwroot/images/"+file));

            if(fileStream == null)
                return NotFound();

            return File(fileStream, "application/octet-stream");
        }
    }
}