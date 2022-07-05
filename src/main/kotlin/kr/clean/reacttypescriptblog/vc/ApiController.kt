package kr.clean.reacttypescriptblog.vc

import kr.clean.reacttypescriptblog.model.Blog
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("api")
class ApiController {

    @Autowired
    lateinit var apiService: ApiService

    @RequestMapping("/")
    fun getList(): List<Blog> {
        return apiService.getList()
    }

}