using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CetunaProject.API.Migrations
{
    public partial class AlumnoExtendido : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alumnos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombres = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    FecNacimiento = table.Column<DateTime>(nullable: false),
                    CiudadNacimiento = table.Column<string>(nullable: true),
                    DptoNacimiento = table.Column<string>(nullable: true),
                    DireccionParticular = table.Column<string>(nullable: true),
                    CiudadActual = table.Column<string>(nullable: true),
                    DptoActual = table.Column<string>(nullable: true),
                    Celular = table.Column<string>(nullable: true),
                    LineaBaja = table.Column<string>(nullable: true),
                    DireccionLaboral = table.Column<string>(nullable: true),
                    LugarTrabajo = table.Column<string>(nullable: true),
                    TelLaboral = table.Column<string>(nullable: true),
                    Cedula = table.Column<int>(nullable: false),
                    Nacionalidad = table.Column<string>(nullable: true),
                    FechaModificacion = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alumnos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DocumentosAlumno",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descripcion = table.Column<string>(nullable: true),
                    FechaAlta = table.Column<DateTime>(nullable: false),
                    EsFoto = table.Column<bool>(nullable: false),
                    AlumnoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentosAlumno", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DocumentosAlumno_Alumnos_AlumnoId",
                        column: x => x.AlumnoId,
                        principalTable: "Alumnos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DocumentosAlumno_AlumnoId",
                table: "DocumentosAlumno",
                column: "AlumnoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DocumentosAlumno");

            migrationBuilder.DropTable(
                name: "Alumnos");
        }
    }
}
