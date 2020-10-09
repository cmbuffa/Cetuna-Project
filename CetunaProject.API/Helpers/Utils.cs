using System;
using System.IO;
using CetunaProject.API.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace CetunaProject.API.Helpers
{
    public static class Utils
    {
        public static string UploadedFile<T>(T model, IWebHostEnvironment webHostEnvironment) where T : IArchivo
        {
            string uniqueFileName = null;

            if (model.File != null)
            {
                string uploadsFolder = Path.Combine(webHostEnvironment.WebRootPath, "images");
                uniqueFileName = Guid.NewGuid().ToString() + "_" + model.File.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    model.File.CopyTo(fileStream);
                }
                return uniqueFileName;
            }
            else
            {
                throw new Exception("Debe especificar un archivo para poder guardarse el documento");
            }
        }

        public static void DeleteFile(string fileName, IWebHostEnvironment webHostEnvironment)
        {
             string filePath = Path.Combine(webHostEnvironment.WebRootPath, "images");
             filePath = Path.Combine(filePath, fileName);

             if(File.Exists(filePath))
                File.Delete(filePath);
             else
                throw new FileNotFoundException($"No se encontro el archivo {filePath}");
        }
    }
}