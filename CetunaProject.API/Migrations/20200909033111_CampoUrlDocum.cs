using Microsoft.EntityFrameworkCore.Migrations;

namespace CetunaProject.API.Migrations
{
    public partial class CampoUrlDocum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "DocumentosAlumno",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Url",
                table: "DocumentosAlumno");
        }
    }
}
