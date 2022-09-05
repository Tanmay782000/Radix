using Microsoft.EntityFrameworkCore;
using Module15.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Repository
{

    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> GetData();
        TEntity PostData(TEntity t);

        TEntity UpdateData(TEntity t);

        TEntity DeleteData(int id);
    }

    public class Repository<Tentity> : IRepository<Tentity> where Tentity : class
    {

        private ToyCompanyContext _tyx { get; set; }
        private DbSet<Tentity> tentities { get; set; }
        public Repository(ToyCompanyContext tyx)
        {
            _tyx = tyx;
            tentities = tyx.Set<Tentity>();
        }

        public List<Tentity> GetData()
        {
            return tentities.ToList();
        }

        public Tentity PostData(Tentity t)
        {
            _tyx.Add(t);
            _tyx.SaveChanges();
            return t;
        }

        public Tentity UpdateData(Tentity t)
        {
            _tyx.Update(t);
            _tyx.SaveChanges();
            return t;
        }
        public Tentity DeleteData(int id)
        {
            var obj = tentities.Find(id);
            tentities.Remove(obj);
            _tyx.SaveChanges();
            return obj;
        }
    }
}
