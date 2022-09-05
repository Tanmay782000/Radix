using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15
{
    public class ActionFilter : ActionFilterAttribute , IActionFilter
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var header = context.HttpContext.Request.Headers["Tanmay"].ToString();
            if(string.IsNullOrEmpty(header))
            {
                context.Result = new UnauthorizedObjectResult("Authorization failed");
            }
        }
    }
}
