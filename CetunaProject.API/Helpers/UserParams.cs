namespace CetunaProject.API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;

        private int pageSize = 10;

        public int Id { get; set; } = 0;

        public string Description { get; set; } = null;

        public int PageSize
        {
            get {return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}
        }

    }
}