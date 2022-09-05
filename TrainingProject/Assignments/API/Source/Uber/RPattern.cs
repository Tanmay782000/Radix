using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uber.Models;

namespace Uber
{
    public interface IRPattern<Tentity> where Tentity : class
    {
        List<Tentity> Get();

        dynamic Post(Tentity tentity);

        dynamic Put(Tentity tentity);


    }


    public class RPattern<Tentity> : IRPattern<Tentity> where Tentity : class
    {

        public uber2407tanmayContext _uberContext { get; set; }

        public RPattern(uber2407tanmayContext uberContext)
        {
            _uberContext = uberContext;
        }

        public List<Tentity> Get()
        {
            return _uberContext.Set<Tentity>().ToList();
        }
         
        public dynamic Post(Tentity tentity)
        {
            _uberContext.Add(tentity);
            _uberContext.SaveChanges();
            return tentity;
        }

        public dynamic Put(Tentity tentity)
        {
            _uberContext.Update(tentity);
            _uberContext.SaveChanges();
            return tentity;
        }


    }
}
