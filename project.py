from project_module import project_object, image_object, link_object, challenge_object

p = project_object('pi_estimation', 'pi estimation')
p.domain = 'http://www.aidansean.com/'
p.path = 'pi_estimation'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'pi_estimation'
p.mathjax = True
p.tags = 'Maths'
p.technologies = 'canvas,HTML,JavaScript'
p.links.append(link_object(p.domain, 'pi_estimation', 'Live page'))
p.introduction = 'This project was put together quickly while waiting for a physics job to finish.  It was an exercise to see how quickly I could make a useful page with my current setup on my website.  Including time to research, write, upload, and test the page it took around 20 minutes.'
p.overview = '''This page uses a Monte Carlo method to estimate &pi;.  This is a pure method in that it does not rely on knowledge of &pi; to make the estimate, as some methods do.  It throws random numbers in a two dimensional area and counts how many lie within the circle of radius \(1\) compared to a square of side \(2\).'''

p.challenges.append(challenge_object('This was all about speed.', 'I already knew everything I needed to put this page together, so it was simply a matter of how quickly I did it.  I\'m quite happy with the end result of 1020 seconds.', 'Resolved'))
